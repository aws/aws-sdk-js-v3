import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { CreateBusinessReportScheduleRequest, CreateBusinessReportScheduleResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateBusinessReportScheduleCommandInput = CreateBusinessReportScheduleRequest;
export declare type CreateBusinessReportScheduleCommandOutput = CreateBusinessReportScheduleResponse & __MetadataBearer;
export declare class CreateBusinessReportScheduleCommand extends $Command<CreateBusinessReportScheduleCommandInput, CreateBusinessReportScheduleCommandOutput, AlexaForBusinessClientResolvedConfig> {
    readonly input: CreateBusinessReportScheduleCommandInput;
    constructor(input: CreateBusinessReportScheduleCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AlexaForBusinessClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateBusinessReportScheduleCommandInput, CreateBusinessReportScheduleCommandOutput>;
    private serialize;
    private deserialize;
}
