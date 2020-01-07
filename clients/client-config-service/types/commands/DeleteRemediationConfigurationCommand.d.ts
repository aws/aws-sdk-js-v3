import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { DeleteRemediationConfigurationRequest, DeleteRemediationConfigurationResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteRemediationConfigurationCommandInput = DeleteRemediationConfigurationRequest;
export declare type DeleteRemediationConfigurationCommandOutput = DeleteRemediationConfigurationResponse & __MetadataBearer;
export declare class DeleteRemediationConfigurationCommand extends $Command<DeleteRemediationConfigurationCommandInput, DeleteRemediationConfigurationCommandOutput, ConfigServiceClientResolvedConfig> {
    readonly input: DeleteRemediationConfigurationCommandInput;
    constructor(input: DeleteRemediationConfigurationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConfigServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteRemediationConfigurationCommandInput, DeleteRemediationConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
