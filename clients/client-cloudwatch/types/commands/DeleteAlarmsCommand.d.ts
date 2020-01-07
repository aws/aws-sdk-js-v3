import { CloudWatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchClient";
import { DeleteAlarmsInput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteAlarmsCommandInput = DeleteAlarmsInput;
export declare type DeleteAlarmsCommandOutput = __MetadataBearer;
export declare class DeleteAlarmsCommand extends $Command<DeleteAlarmsCommandInput, DeleteAlarmsCommandOutput, CloudWatchClientResolvedConfig> {
    readonly input: DeleteAlarmsCommandInput;
    constructor(input: DeleteAlarmsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudWatchClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteAlarmsCommandInput, DeleteAlarmsCommandOutput>;
    private serialize;
    private deserialize;
}
