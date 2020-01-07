import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { DeleteRoomSkillParameterRequest, DeleteRoomSkillParameterResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteRoomSkillParameterCommandInput = DeleteRoomSkillParameterRequest;
export declare type DeleteRoomSkillParameterCommandOutput = DeleteRoomSkillParameterResponse & __MetadataBearer;
export declare class DeleteRoomSkillParameterCommand extends $Command<DeleteRoomSkillParameterCommandInput, DeleteRoomSkillParameterCommandOutput, AlexaForBusinessClientResolvedConfig> {
    readonly input: DeleteRoomSkillParameterCommandInput;
    constructor(input: DeleteRoomSkillParameterCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AlexaForBusinessClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteRoomSkillParameterCommandInput, DeleteRoomSkillParameterCommandOutput>;
    private serialize;
    private deserialize;
}
