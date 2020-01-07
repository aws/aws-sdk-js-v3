import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { CreateTrafficPolicyInstanceRequest, CreateTrafficPolicyInstanceResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateTrafficPolicyInstanceCommandInput = CreateTrafficPolicyInstanceRequest;
export declare type CreateTrafficPolicyInstanceCommandOutput = CreateTrafficPolicyInstanceResponse & __MetadataBearer;
export declare class CreateTrafficPolicyInstanceCommand extends $Command<CreateTrafficPolicyInstanceCommandInput, CreateTrafficPolicyInstanceCommandOutput, Route53ClientResolvedConfig> {
    readonly input: CreateTrafficPolicyInstanceCommandInput;
    constructor(input: CreateTrafficPolicyInstanceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateTrafficPolicyInstanceCommandInput, CreateTrafficPolicyInstanceCommandOutput>;
    private serialize;
    private deserialize;
}
