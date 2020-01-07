import { CostandUsageReportServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CostandUsageReportServiceClient";
import { DeleteReportDefinitionRequest, DeleteReportDefinitionResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteReportDefinitionCommandInput = DeleteReportDefinitionRequest;
export declare type DeleteReportDefinitionCommandOutput = DeleteReportDefinitionResponse & __MetadataBearer;
export declare class DeleteReportDefinitionCommand extends $Command<DeleteReportDefinitionCommandInput, DeleteReportDefinitionCommandOutput, CostandUsageReportServiceClientResolvedConfig> {
    readonly input: DeleteReportDefinitionCommandInput;
    constructor(input: DeleteReportDefinitionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CostandUsageReportServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteReportDefinitionCommandInput, DeleteReportDefinitionCommandOutput>;
    private serialize;
    private deserialize;
}
