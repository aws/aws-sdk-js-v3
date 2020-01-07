import { ServiceInputTypes, ServiceOutputTypes, WAFRegionalClientResolvedConfig } from "../WAFRegionalClient";
import { DeleteLoggingConfigurationRequest, DeleteLoggingConfigurationResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteLoggingConfigurationCommandInput = DeleteLoggingConfigurationRequest;
export declare type DeleteLoggingConfigurationCommandOutput = DeleteLoggingConfigurationResponse & __MetadataBearer;
export declare class DeleteLoggingConfigurationCommand extends $Command<DeleteLoggingConfigurationCommandInput, DeleteLoggingConfigurationCommandOutput, WAFRegionalClientResolvedConfig> {
    readonly input: DeleteLoggingConfigurationCommandInput;
    constructor(input: DeleteLoggingConfigurationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WAFRegionalClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteLoggingConfigurationCommandInput, DeleteLoggingConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
