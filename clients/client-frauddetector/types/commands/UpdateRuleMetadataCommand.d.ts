import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import { UpdateRuleMetadataRequest, UpdateRuleMetadataResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateRuleMetadataCommandInput = UpdateRuleMetadataRequest;
export declare type UpdateRuleMetadataCommandOutput = UpdateRuleMetadataResult & __MetadataBearer;
export declare class UpdateRuleMetadataCommand extends $Command<UpdateRuleMetadataCommandInput, UpdateRuleMetadataCommandOutput, FraudDetectorClientResolvedConfig> {
    readonly input: UpdateRuleMetadataCommandInput;
    constructor(input: UpdateRuleMetadataCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FraudDetectorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateRuleMetadataCommandInput, UpdateRuleMetadataCommandOutput>;
    private serialize;
    private deserialize;
}
