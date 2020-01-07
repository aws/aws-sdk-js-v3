import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { DeleteBusinessReportScheduleRequest, DeleteBusinessReportScheduleResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteBusinessReportScheduleCommandInput = DeleteBusinessReportScheduleRequest;
export declare type DeleteBusinessReportScheduleCommandOutput = DeleteBusinessReportScheduleResponse & __MetadataBearer;
export declare class DeleteBusinessReportScheduleCommand extends $Command<DeleteBusinessReportScheduleCommandInput, DeleteBusinessReportScheduleCommandOutput, AlexaForBusinessClientResolvedConfig> {
    readonly input: DeleteBusinessReportScheduleCommandInput;
    constructor(input: DeleteBusinessReportScheduleCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AlexaForBusinessClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteBusinessReportScheduleCommandInput, DeleteBusinessReportScheduleCommandOutput>;
    private serialize;
    private deserialize;
}
