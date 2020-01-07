import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { DisassociateSkillFromUsersRequest, DisassociateSkillFromUsersResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DisassociateSkillFromUsersCommandInput = DisassociateSkillFromUsersRequest;
export declare type DisassociateSkillFromUsersCommandOutput = DisassociateSkillFromUsersResponse & __MetadataBearer;
export declare class DisassociateSkillFromUsersCommand extends $Command<DisassociateSkillFromUsersCommandInput, DisassociateSkillFromUsersCommandOutput, AlexaForBusinessClientResolvedConfig> {
    readonly input: DisassociateSkillFromUsersCommandInput;
    constructor(input: DisassociateSkillFromUsersCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AlexaForBusinessClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisassociateSkillFromUsersCommandInput, DisassociateSkillFromUsersCommandOutput>;
    private serialize;
    private deserialize;
}
