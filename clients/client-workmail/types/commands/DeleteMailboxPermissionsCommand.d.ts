import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";
import { DeleteMailboxPermissionsRequest, DeleteMailboxPermissionsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteMailboxPermissionsCommandInput = DeleteMailboxPermissionsRequest;
export declare type DeleteMailboxPermissionsCommandOutput = DeleteMailboxPermissionsResponse & __MetadataBearer;
export declare class DeleteMailboxPermissionsCommand extends $Command<DeleteMailboxPermissionsCommandInput, DeleteMailboxPermissionsCommandOutput, WorkMailClientResolvedConfig> {
    readonly input: DeleteMailboxPermissionsCommandInput;
    constructor(input: DeleteMailboxPermissionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkMailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteMailboxPermissionsCommandInput, DeleteMailboxPermissionsCommandOutput>;
    private serialize;
    private deserialize;
}
