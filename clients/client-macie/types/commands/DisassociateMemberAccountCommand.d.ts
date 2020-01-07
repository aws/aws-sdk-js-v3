import { MacieClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MacieClient";
import { DisassociateMemberAccountRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DisassociateMemberAccountCommandInput = DisassociateMemberAccountRequest;
export declare type DisassociateMemberAccountCommandOutput = __MetadataBearer;
export declare class DisassociateMemberAccountCommand extends $Command<DisassociateMemberAccountCommandInput, DisassociateMemberAccountCommandOutput, MacieClientResolvedConfig> {
    readonly input: DisassociateMemberAccountCommandInput;
    constructor(input: DisassociateMemberAccountCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MacieClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisassociateMemberAccountCommandInput, DisassociateMemberAccountCommandOutput>;
    private serialize;
    private deserialize;
}
