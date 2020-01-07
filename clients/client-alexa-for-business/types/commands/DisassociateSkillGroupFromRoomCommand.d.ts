import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { DisassociateSkillGroupFromRoomRequest, DisassociateSkillGroupFromRoomResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DisassociateSkillGroupFromRoomCommandInput = DisassociateSkillGroupFromRoomRequest;
export declare type DisassociateSkillGroupFromRoomCommandOutput = DisassociateSkillGroupFromRoomResponse & __MetadataBearer;
export declare class DisassociateSkillGroupFromRoomCommand extends $Command<DisassociateSkillGroupFromRoomCommandInput, DisassociateSkillGroupFromRoomCommandOutput, AlexaForBusinessClientResolvedConfig> {
    readonly input: DisassociateSkillGroupFromRoomCommandInput;
    constructor(input: DisassociateSkillGroupFromRoomCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AlexaForBusinessClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisassociateSkillGroupFromRoomCommandInput, DisassociateSkillGroupFromRoomCommandOutput>;
    private serialize;
    private deserialize;
}
