import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { RejectSkillRequest, RejectSkillResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RejectSkillCommandInput = RejectSkillRequest;
export declare type RejectSkillCommandOutput = RejectSkillResponse & __MetadataBearer;
export declare class RejectSkillCommand extends $Command<RejectSkillCommandInput, RejectSkillCommandOutput, AlexaForBusinessClientResolvedConfig> {
    readonly input: RejectSkillCommandInput;
    constructor(input: RejectSkillCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AlexaForBusinessClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RejectSkillCommandInput, RejectSkillCommandOutput>;
    private serialize;
    private deserialize;
}
