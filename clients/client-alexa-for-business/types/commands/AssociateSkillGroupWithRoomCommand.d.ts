import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { AssociateSkillGroupWithRoomRequest, AssociateSkillGroupWithRoomResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AssociateSkillGroupWithRoomCommandInput = AssociateSkillGroupWithRoomRequest;
export declare type AssociateSkillGroupWithRoomCommandOutput = AssociateSkillGroupWithRoomResponse & __MetadataBearer;
export declare class AssociateSkillGroupWithRoomCommand extends $Command<AssociateSkillGroupWithRoomCommandInput, AssociateSkillGroupWithRoomCommandOutput, AlexaForBusinessClientResolvedConfig> {
    readonly input: AssociateSkillGroupWithRoomCommandInput;
    constructor(input: AssociateSkillGroupWithRoomCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AlexaForBusinessClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AssociateSkillGroupWithRoomCommandInput, AssociateSkillGroupWithRoomCommandOutput>;
    private serialize;
    private deserialize;
}
