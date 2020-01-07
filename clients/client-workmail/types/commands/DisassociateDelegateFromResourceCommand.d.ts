import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";
import { DisassociateDelegateFromResourceRequest, DisassociateDelegateFromResourceResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DisassociateDelegateFromResourceCommandInput = DisassociateDelegateFromResourceRequest;
export declare type DisassociateDelegateFromResourceCommandOutput = DisassociateDelegateFromResourceResponse & __MetadataBearer;
export declare class DisassociateDelegateFromResourceCommand extends $Command<DisassociateDelegateFromResourceCommandInput, DisassociateDelegateFromResourceCommandOutput, WorkMailClientResolvedConfig> {
    readonly input: DisassociateDelegateFromResourceCommandInput;
    constructor(input: DisassociateDelegateFromResourceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkMailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisassociateDelegateFromResourceCommandInput, DisassociateDelegateFromResourceCommandOutput>;
    private serialize;
    private deserialize;
}
