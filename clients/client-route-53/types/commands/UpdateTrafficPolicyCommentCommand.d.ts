import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { UpdateTrafficPolicyCommentRequest, UpdateTrafficPolicyCommentResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateTrafficPolicyCommentCommandInput = UpdateTrafficPolicyCommentRequest;
export declare type UpdateTrafficPolicyCommentCommandOutput = UpdateTrafficPolicyCommentResponse & __MetadataBearer;
export declare class UpdateTrafficPolicyCommentCommand extends $Command<UpdateTrafficPolicyCommentCommandInput, UpdateTrafficPolicyCommentCommandOutput, Route53ClientResolvedConfig> {
    readonly input: UpdateTrafficPolicyCommentCommandInput;
    constructor(input: UpdateTrafficPolicyCommentCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateTrafficPolicyCommentCommandInput, UpdateTrafficPolicyCommentCommandOutput>;
    private serialize;
    private deserialize;
}
