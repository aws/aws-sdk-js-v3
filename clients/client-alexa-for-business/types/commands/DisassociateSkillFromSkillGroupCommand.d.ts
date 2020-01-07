import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { DisassociateSkillFromSkillGroupRequest, DisassociateSkillFromSkillGroupResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DisassociateSkillFromSkillGroupCommandInput = DisassociateSkillFromSkillGroupRequest;
export declare type DisassociateSkillFromSkillGroupCommandOutput = DisassociateSkillFromSkillGroupResponse & __MetadataBearer;
export declare class DisassociateSkillFromSkillGroupCommand extends $Command<DisassociateSkillFromSkillGroupCommandInput, DisassociateSkillFromSkillGroupCommandOutput, AlexaForBusinessClientResolvedConfig> {
    readonly input: DisassociateSkillFromSkillGroupCommandInput;
    constructor(input: DisassociateSkillFromSkillGroupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AlexaForBusinessClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisassociateSkillFromSkillGroupCommandInput, DisassociateSkillFromSkillGroupCommandOutput>;
    private serialize;
    private deserialize;
}
