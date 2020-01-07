import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { CreateScheduledActionMessage, ScheduledAction } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateScheduledActionCommandInput = CreateScheduledActionMessage;
export declare type CreateScheduledActionCommandOutput = ScheduledAction & __MetadataBearer;
export declare class CreateScheduledActionCommand extends $Command<CreateScheduledActionCommandInput, CreateScheduledActionCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: CreateScheduledActionCommandInput;
    constructor(input: CreateScheduledActionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateScheduledActionCommandInput, CreateScheduledActionCommandOutput>;
    private serialize;
    private deserialize;
}
