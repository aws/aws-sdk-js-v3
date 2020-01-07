import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";
import { DisassociateMemberFromGroupRequest, DisassociateMemberFromGroupResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DisassociateMemberFromGroupCommandInput = DisassociateMemberFromGroupRequest;
export declare type DisassociateMemberFromGroupCommandOutput = DisassociateMemberFromGroupResponse & __MetadataBearer;
export declare class DisassociateMemberFromGroupCommand extends $Command<DisassociateMemberFromGroupCommandInput, DisassociateMemberFromGroupCommandOutput, WorkMailClientResolvedConfig> {
    readonly input: DisassociateMemberFromGroupCommandInput;
    constructor(input: DisassociateMemberFromGroupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkMailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisassociateMemberFromGroupCommandInput, DisassociateMemberFromGroupCommandOutput>;
    private serialize;
    private deserialize;
}
