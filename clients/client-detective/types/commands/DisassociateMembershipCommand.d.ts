import { DetectiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DetectiveClient";
import { DisassociateMembershipRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DisassociateMembershipCommandInput = DisassociateMembershipRequest;
export declare type DisassociateMembershipCommandOutput = __MetadataBearer;
export declare class DisassociateMembershipCommand extends $Command<DisassociateMembershipCommandInput, DisassociateMembershipCommandOutput, DetectiveClientResolvedConfig> {
    readonly input: DisassociateMembershipCommandInput;
    constructor(input: DisassociateMembershipCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DetectiveClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisassociateMembershipCommandInput, DisassociateMembershipCommandOutput>;
    private serialize;
    private deserialize;
}
