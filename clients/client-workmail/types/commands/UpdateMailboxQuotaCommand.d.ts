import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";
import { UpdateMailboxQuotaRequest, UpdateMailboxQuotaResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateMailboxQuotaCommandInput = UpdateMailboxQuotaRequest;
export declare type UpdateMailboxQuotaCommandOutput = UpdateMailboxQuotaResponse & __MetadataBearer;
export declare class UpdateMailboxQuotaCommand extends $Command<UpdateMailboxQuotaCommandInput, UpdateMailboxQuotaCommandOutput, WorkMailClientResolvedConfig> {
    readonly input: UpdateMailboxQuotaCommandInput;
    constructor(input: UpdateMailboxQuotaCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkMailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateMailboxQuotaCommandInput, UpdateMailboxQuotaCommandOutput>;
    private serialize;
    private deserialize;
}
