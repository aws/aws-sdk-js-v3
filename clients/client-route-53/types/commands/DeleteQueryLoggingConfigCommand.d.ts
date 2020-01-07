import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { DeleteQueryLoggingConfigRequest, DeleteQueryLoggingConfigResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteQueryLoggingConfigCommandInput = DeleteQueryLoggingConfigRequest;
export declare type DeleteQueryLoggingConfigCommandOutput = DeleteQueryLoggingConfigResponse & __MetadataBearer;
export declare class DeleteQueryLoggingConfigCommand extends $Command<DeleteQueryLoggingConfigCommandInput, DeleteQueryLoggingConfigCommandOutput, Route53ClientResolvedConfig> {
    readonly input: DeleteQueryLoggingConfigCommandInput;
    constructor(input: DeleteQueryLoggingConfigCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteQueryLoggingConfigCommandInput, DeleteQueryLoggingConfigCommandOutput>;
    private serialize;
    private deserialize;
}
