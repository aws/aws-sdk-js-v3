import { CostandUsageReportServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CostandUsageReportServiceClient";
import { PutReportDefinitionRequest, PutReportDefinitionResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PutReportDefinitionCommandInput = PutReportDefinitionRequest;
export declare type PutReportDefinitionCommandOutput = PutReportDefinitionResponse & __MetadataBearer;
export declare class PutReportDefinitionCommand extends $Command<PutReportDefinitionCommandInput, PutReportDefinitionCommandOutput, CostandUsageReportServiceClientResolvedConfig> {
    readonly input: PutReportDefinitionCommandInput;
    constructor(input: PutReportDefinitionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CostandUsageReportServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutReportDefinitionCommandInput, PutReportDefinitionCommandOutput>;
    private serialize;
    private deserialize;
}
