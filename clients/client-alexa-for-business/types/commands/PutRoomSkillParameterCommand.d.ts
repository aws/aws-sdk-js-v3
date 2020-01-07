import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { PutRoomSkillParameterRequest, PutRoomSkillParameterResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PutRoomSkillParameterCommandInput = PutRoomSkillParameterRequest;
export declare type PutRoomSkillParameterCommandOutput = PutRoomSkillParameterResponse & __MetadataBearer;
export declare class PutRoomSkillParameterCommand extends $Command<PutRoomSkillParameterCommandInput, PutRoomSkillParameterCommandOutput, AlexaForBusinessClientResolvedConfig> {
    readonly input: PutRoomSkillParameterCommandInput;
    constructor(input: PutRoomSkillParameterCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AlexaForBusinessClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutRoomSkillParameterCommandInput, PutRoomSkillParameterCommandOutput>;
    private serialize;
    private deserialize;
}
