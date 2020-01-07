import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { AssociateSkillWithUsersRequest, AssociateSkillWithUsersResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AssociateSkillWithUsersCommandInput = AssociateSkillWithUsersRequest;
export declare type AssociateSkillWithUsersCommandOutput = AssociateSkillWithUsersResponse & __MetadataBearer;
export declare class AssociateSkillWithUsersCommand extends $Command<AssociateSkillWithUsersCommandInput, AssociateSkillWithUsersCommandOutput, AlexaForBusinessClientResolvedConfig> {
    readonly input: AssociateSkillWithUsersCommandInput;
    constructor(input: AssociateSkillWithUsersCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AlexaForBusinessClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AssociateSkillWithUsersCommandInput, AssociateSkillWithUsersCommandOutput>;
    private serialize;
    private deserialize;
}
