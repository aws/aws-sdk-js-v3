import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { GetBlockPublicAccessConfigurationInput, GetBlockPublicAccessConfigurationOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetBlockPublicAccessConfigurationCommandInput = GetBlockPublicAccessConfigurationInput;
export declare type GetBlockPublicAccessConfigurationCommandOutput = GetBlockPublicAccessConfigurationOutput & __MetadataBearer;
export declare class GetBlockPublicAccessConfigurationCommand extends $Command<GetBlockPublicAccessConfigurationCommandInput, GetBlockPublicAccessConfigurationCommandOutput, EMRClientResolvedConfig> {
    readonly input: GetBlockPublicAccessConfigurationCommandInput;
    constructor(input: GetBlockPublicAccessConfigurationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EMRClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetBlockPublicAccessConfigurationCommandInput, GetBlockPublicAccessConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
