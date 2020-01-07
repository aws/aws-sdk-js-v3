import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";
import { GetMailboxDetailsRequest, GetMailboxDetailsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetMailboxDetailsCommandInput = GetMailboxDetailsRequest;
export declare type GetMailboxDetailsCommandOutput = GetMailboxDetailsResponse & __MetadataBearer;
export declare class GetMailboxDetailsCommand extends $Command<GetMailboxDetailsCommandInput, GetMailboxDetailsCommandOutput, WorkMailClientResolvedConfig> {
    readonly input: GetMailboxDetailsCommandInput;
    constructor(input: GetMailboxDetailsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkMailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetMailboxDetailsCommandInput, GetMailboxDetailsCommandOutput>;
    private serialize;
    private deserialize;
}
