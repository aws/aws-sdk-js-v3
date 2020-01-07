import { MigrationHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MigrationHubClient";
import { NotifyApplicationStateRequest, NotifyApplicationStateResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type NotifyApplicationStateCommandInput = NotifyApplicationStateRequest;
export declare type NotifyApplicationStateCommandOutput = NotifyApplicationStateResult & __MetadataBearer;
export declare class NotifyApplicationStateCommand extends $Command<NotifyApplicationStateCommandInput, NotifyApplicationStateCommandOutput, MigrationHubClientResolvedConfig> {
    readonly input: NotifyApplicationStateCommandInput;
    constructor(input: NotifyApplicationStateCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MigrationHubClientResolvedConfig, options?: __HttpHandlerOptions): Handler<NotifyApplicationStateCommandInput, NotifyApplicationStateCommandOutput>;
    private serialize;
    private deserialize;
}
