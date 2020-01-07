import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { GetCalendarStateRequest, GetCalendarStateResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetCalendarStateCommandInput = GetCalendarStateRequest;
export declare type GetCalendarStateCommandOutput = GetCalendarStateResponse & __MetadataBearer;
export declare class GetCalendarStateCommand extends $Command<GetCalendarStateCommandInput, GetCalendarStateCommandOutput, SSMClientResolvedConfig> {
    readonly input: GetCalendarStateCommandInput;
    constructor(input: GetCalendarStateCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetCalendarStateCommandInput, GetCalendarStateCommandOutput>;
    private serialize;
    private deserialize;
}
