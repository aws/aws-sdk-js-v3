import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { CreateTrafficPolicyVersionRequest, CreateTrafficPolicyVersionResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateTrafficPolicyVersionCommandInput = CreateTrafficPolicyVersionRequest;
export declare type CreateTrafficPolicyVersionCommandOutput = CreateTrafficPolicyVersionResponse & __MetadataBearer;
export declare class CreateTrafficPolicyVersionCommand extends $Command<CreateTrafficPolicyVersionCommandInput, CreateTrafficPolicyVersionCommandOutput, Route53ClientResolvedConfig> {
    readonly input: CreateTrafficPolicyVersionCommandInput;
    constructor(input: CreateTrafficPolicyVersionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateTrafficPolicyVersionCommandInput, CreateTrafficPolicyVersionCommandOutput>;
    private serialize;
    private deserialize;
}
