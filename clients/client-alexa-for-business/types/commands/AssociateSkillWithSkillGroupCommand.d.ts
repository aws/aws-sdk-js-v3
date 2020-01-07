import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { AssociateSkillWithSkillGroupRequest, AssociateSkillWithSkillGroupResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AssociateSkillWithSkillGroupCommandInput = AssociateSkillWithSkillGroupRequest;
export declare type AssociateSkillWithSkillGroupCommandOutput = AssociateSkillWithSkillGroupResponse & __MetadataBearer;
export declare class AssociateSkillWithSkillGroupCommand extends $Command<AssociateSkillWithSkillGroupCommandInput, AssociateSkillWithSkillGroupCommandOutput, AlexaForBusinessClientResolvedConfig> {
    readonly input: AssociateSkillWithSkillGroupCommandInput;
    constructor(input: AssociateSkillWithSkillGroupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AlexaForBusinessClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AssociateSkillWithSkillGroupCommandInput, AssociateSkillWithSkillGroupCommandOutput>;
    private serialize;
    private deserialize;
}
