import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { ApproveSkillRequest, ApproveSkillResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ApproveSkillCommandInput = ApproveSkillRequest;
export declare type ApproveSkillCommandOutput = ApproveSkillResponse & __MetadataBearer;
export declare class ApproveSkillCommand extends $Command<ApproveSkillCommandInput, ApproveSkillCommandOutput, AlexaForBusinessClientResolvedConfig> {
    readonly input: ApproveSkillCommandInput;
    constructor(input: ApproveSkillCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AlexaForBusinessClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ApproveSkillCommandInput, ApproveSkillCommandOutput>;
    private serialize;
    private deserialize;
}
