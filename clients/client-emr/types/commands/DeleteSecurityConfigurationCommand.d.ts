import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { DeleteSecurityConfigurationInput, DeleteSecurityConfigurationOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteSecurityConfigurationCommandInput = DeleteSecurityConfigurationInput;
export declare type DeleteSecurityConfigurationCommandOutput = DeleteSecurityConfigurationOutput & __MetadataBearer;
export declare class DeleteSecurityConfigurationCommand extends $Command<DeleteSecurityConfigurationCommandInput, DeleteSecurityConfigurationCommandOutput, EMRClientResolvedConfig> {
    readonly input: DeleteSecurityConfigurationCommandInput;
    constructor(input: DeleteSecurityConfigurationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EMRClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteSecurityConfigurationCommandInput, DeleteSecurityConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
