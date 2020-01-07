import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { ModifyScheduledActionMessage, ScheduledAction } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ModifyScheduledActionCommandInput = ModifyScheduledActionMessage;
export declare type ModifyScheduledActionCommandOutput = ScheduledAction & __MetadataBearer;
export declare class ModifyScheduledActionCommand extends $Command<ModifyScheduledActionCommandInput, ModifyScheduledActionCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: ModifyScheduledActionCommandInput;
    constructor(input: ModifyScheduledActionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyScheduledActionCommandInput, ModifyScheduledActionCommandOutput>;
    private serialize;
    private deserialize;
}
