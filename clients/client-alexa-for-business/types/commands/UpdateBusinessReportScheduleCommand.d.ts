import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { UpdateBusinessReportScheduleRequest, UpdateBusinessReportScheduleResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateBusinessReportScheduleCommandInput = UpdateBusinessReportScheduleRequest;
export declare type UpdateBusinessReportScheduleCommandOutput = UpdateBusinessReportScheduleResponse & __MetadataBearer;
export declare class UpdateBusinessReportScheduleCommand extends $Command<UpdateBusinessReportScheduleCommandInput, UpdateBusinessReportScheduleCommandOutput, AlexaForBusinessClientResolvedConfig> {
    readonly input: UpdateBusinessReportScheduleCommandInput;
    constructor(input: UpdateBusinessReportScheduleCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AlexaForBusinessClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateBusinessReportScheduleCommandInput, UpdateBusinessReportScheduleCommandOutput>;
    private serialize;
    private deserialize;
}
