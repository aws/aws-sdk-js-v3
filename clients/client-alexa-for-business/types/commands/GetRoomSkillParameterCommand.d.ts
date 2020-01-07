import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { GetRoomSkillParameterRequest, GetRoomSkillParameterResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetRoomSkillParameterCommandInput = GetRoomSkillParameterRequest;
export declare type GetRoomSkillParameterCommandOutput = GetRoomSkillParameterResponse & __MetadataBearer;
export declare class GetRoomSkillParameterCommand extends $Command<GetRoomSkillParameterCommandInput, GetRoomSkillParameterCommandOutput, AlexaForBusinessClientResolvedConfig> {
    readonly input: GetRoomSkillParameterCommandInput;
    constructor(input: GetRoomSkillParameterCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AlexaForBusinessClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetRoomSkillParameterCommandInput, GetRoomSkillParameterCommandOutput>;
    private serialize;
    private deserialize;
}
