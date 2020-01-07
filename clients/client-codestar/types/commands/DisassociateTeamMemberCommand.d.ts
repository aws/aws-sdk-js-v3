import { CodeStarClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeStarClient";
import { DisassociateTeamMemberRequest, DisassociateTeamMemberResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DisassociateTeamMemberCommandInput = DisassociateTeamMemberRequest;
export declare type DisassociateTeamMemberCommandOutput = DisassociateTeamMemberResult & __MetadataBearer;
export declare class DisassociateTeamMemberCommand extends $Command<DisassociateTeamMemberCommandInput, DisassociateTeamMemberCommandOutput, CodeStarClientResolvedConfig> {
    readonly input: DisassociateTeamMemberCommandInput;
    constructor(input: DisassociateTeamMemberCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeStarClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisassociateTeamMemberCommandInput, DisassociateTeamMemberCommandOutput>;
    private serialize;
    private deserialize;
}
