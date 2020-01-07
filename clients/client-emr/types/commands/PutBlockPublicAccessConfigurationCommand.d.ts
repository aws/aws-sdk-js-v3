import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { PutBlockPublicAccessConfigurationInput, PutBlockPublicAccessConfigurationOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PutBlockPublicAccessConfigurationCommandInput = PutBlockPublicAccessConfigurationInput;
export declare type PutBlockPublicAccessConfigurationCommandOutput = PutBlockPublicAccessConfigurationOutput & __MetadataBearer;
export declare class PutBlockPublicAccessConfigurationCommand extends $Command<PutBlockPublicAccessConfigurationCommandInput, PutBlockPublicAccessConfigurationCommandOutput, EMRClientResolvedConfig> {
    readonly input: PutBlockPublicAccessConfigurationCommandInput;
    constructor(input: PutBlockPublicAccessConfigurationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EMRClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutBlockPublicAccessConfigurationCommandInput, PutBlockPublicAccessConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
