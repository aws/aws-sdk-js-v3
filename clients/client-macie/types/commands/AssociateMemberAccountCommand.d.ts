import { MacieClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MacieClient";
import { AssociateMemberAccountRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AssociateMemberAccountCommandInput = AssociateMemberAccountRequest;
export declare type AssociateMemberAccountCommandOutput = __MetadataBearer;
export declare class AssociateMemberAccountCommand extends $Command<AssociateMemberAccountCommandInput, AssociateMemberAccountCommandOutput, MacieClientResolvedConfig> {
    readonly input: AssociateMemberAccountCommandInput;
    constructor(input: AssociateMemberAccountCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MacieClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AssociateMemberAccountCommandInput, AssociateMemberAccountCommandOutput>;
    private serialize;
    private deserialize;
}
