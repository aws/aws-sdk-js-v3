import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";
import { PutMailboxPermissionsRequest, PutMailboxPermissionsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PutMailboxPermissionsCommandInput = PutMailboxPermissionsRequest;
export declare type PutMailboxPermissionsCommandOutput = PutMailboxPermissionsResponse & __MetadataBearer;
export declare class PutMailboxPermissionsCommand extends $Command<PutMailboxPermissionsCommandInput, PutMailboxPermissionsCommandOutput, WorkMailClientResolvedConfig> {
    readonly input: PutMailboxPermissionsCommandInput;
    constructor(input: PutMailboxPermissionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkMailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutMailboxPermissionsCommandInput, PutMailboxPermissionsCommandOutput>;
    private serialize;
    private deserialize;
}
