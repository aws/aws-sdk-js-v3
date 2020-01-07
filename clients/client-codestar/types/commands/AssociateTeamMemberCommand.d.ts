import { CodeStarClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeStarClient";
import { AssociateTeamMemberRequest, AssociateTeamMemberResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AssociateTeamMemberCommandInput = AssociateTeamMemberRequest;
export declare type AssociateTeamMemberCommandOutput = AssociateTeamMemberResult & __MetadataBearer;
export declare class AssociateTeamMemberCommand extends $Command<AssociateTeamMemberCommandInput, AssociateTeamMemberCommandOutput, CodeStarClientResolvedConfig> {
    readonly input: AssociateTeamMemberCommandInput;
    constructor(input: AssociateTeamMemberCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeStarClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AssociateTeamMemberCommandInput, AssociateTeamMemberCommandOutput>;
    private serialize;
    private deserialize;
}
