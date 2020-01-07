import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";
import { ListMailboxPermissionsRequest, ListMailboxPermissionsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListMailboxPermissionsCommandInput = ListMailboxPermissionsRequest;
export declare type ListMailboxPermissionsCommandOutput = ListMailboxPermissionsResponse & __MetadataBearer;
export declare class ListMailboxPermissionsCommand extends $Command<ListMailboxPermissionsCommandInput, ListMailboxPermissionsCommandOutput, WorkMailClientResolvedConfig> {
    readonly input: ListMailboxPermissionsCommandInput;
    constructor(input: ListMailboxPermissionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkMailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListMailboxPermissionsCommandInput, ListMailboxPermissionsCommandOutput>;
    private serialize;
    private deserialize;
}
