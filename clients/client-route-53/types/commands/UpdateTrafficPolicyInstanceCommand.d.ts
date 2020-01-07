import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { UpdateTrafficPolicyInstanceRequest, UpdateTrafficPolicyInstanceResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateTrafficPolicyInstanceCommandInput = UpdateTrafficPolicyInstanceRequest;
export declare type UpdateTrafficPolicyInstanceCommandOutput = UpdateTrafficPolicyInstanceResponse & __MetadataBearer;
export declare class UpdateTrafficPolicyInstanceCommand extends $Command<UpdateTrafficPolicyInstanceCommandInput, UpdateTrafficPolicyInstanceCommandOutput, Route53ClientResolvedConfig> {
    readonly input: UpdateTrafficPolicyInstanceCommandInput;
    constructor(input: UpdateTrafficPolicyInstanceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateTrafficPolicyInstanceCommandInput, UpdateTrafficPolicyInstanceCommandOutput>;
    private serialize;
    private deserialize;
}
