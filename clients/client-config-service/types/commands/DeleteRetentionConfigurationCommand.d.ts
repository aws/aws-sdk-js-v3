import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { DeleteRetentionConfigurationRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteRetentionConfigurationCommandInput = DeleteRetentionConfigurationRequest;
export declare type DeleteRetentionConfigurationCommandOutput = __MetadataBearer;
export declare class DeleteRetentionConfigurationCommand extends $Command<DeleteRetentionConfigurationCommandInput, DeleteRetentionConfigurationCommandOutput, ConfigServiceClientResolvedConfig> {
    readonly input: DeleteRetentionConfigurationCommandInput;
    constructor(input: DeleteRetentionConfigurationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConfigServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteRetentionConfigurationCommandInput, DeleteRetentionConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
