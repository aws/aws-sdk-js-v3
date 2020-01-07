import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { ListBusinessReportSchedulesRequest, ListBusinessReportSchedulesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListBusinessReportSchedulesCommandInput = ListBusinessReportSchedulesRequest;
export declare type ListBusinessReportSchedulesCommandOutput = ListBusinessReportSchedulesResponse & __MetadataBearer;
export declare class ListBusinessReportSchedulesCommand extends $Command<ListBusinessReportSchedulesCommandInput, ListBusinessReportSchedulesCommandOutput, AlexaForBusinessClientResolvedConfig> {
    readonly input: ListBusinessReportSchedulesCommandInput;
    constructor(input: ListBusinessReportSchedulesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AlexaForBusinessClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListBusinessReportSchedulesCommandInput, ListBusinessReportSchedulesCommandOutput>;
    private serialize;
    private deserialize;
}
