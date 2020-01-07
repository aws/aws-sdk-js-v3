import { CodeStarClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeStarClient";
import { UpdateTeamMemberRequest, UpdateTeamMemberResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateTeamMemberCommandInput = UpdateTeamMemberRequest;
export declare type UpdateTeamMemberCommandOutput = UpdateTeamMemberResult & __MetadataBearer;
export declare class UpdateTeamMemberCommand extends $Command<UpdateTeamMemberCommandInput, UpdateTeamMemberCommandOutput, CodeStarClientResolvedConfig> {
    readonly input: UpdateTeamMemberCommandInput;
    constructor(input: UpdateTeamMemberCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeStarClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateTeamMemberCommandInput, UpdateTeamMemberCommandOutput>;
    private serialize;
    private deserialize;
}
