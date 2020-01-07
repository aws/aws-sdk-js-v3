import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";
import { AssociateMemberToGroupRequest, AssociateMemberToGroupResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AssociateMemberToGroupCommandInput = AssociateMemberToGroupRequest;
export declare type AssociateMemberToGroupCommandOutput = AssociateMemberToGroupResponse & __MetadataBearer;
export declare class AssociateMemberToGroupCommand extends $Command<AssociateMemberToGroupCommandInput, AssociateMemberToGroupCommandOutput, WorkMailClientResolvedConfig> {
    readonly input: AssociateMemberToGroupCommandInput;
    constructor(input: AssociateMemberToGroupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkMailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AssociateMemberToGroupCommandInput, AssociateMemberToGroupCommandOutput>;
    private serialize;
    private deserialize;
}
