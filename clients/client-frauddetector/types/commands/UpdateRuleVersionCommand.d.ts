import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import { UpdateRuleVersionRequest, UpdateRuleVersionResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateRuleVersionCommandInput = UpdateRuleVersionRequest;
export declare type UpdateRuleVersionCommandOutput = UpdateRuleVersionResult & __MetadataBearer;
export declare class UpdateRuleVersionCommand extends $Command<UpdateRuleVersionCommandInput, UpdateRuleVersionCommandOutput, FraudDetectorClientResolvedConfig> {
    readonly input: UpdateRuleVersionCommandInput;
    constructor(input: UpdateRuleVersionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FraudDetectorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateRuleVersionCommandInput, UpdateRuleVersionCommandOutput>;
    private serialize;
    private deserialize;
}
