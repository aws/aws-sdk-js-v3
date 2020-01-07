import { LakeFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LakeFormationClient";
import { DeregisterResourceRequest, DeregisterResourceResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeregisterResourceCommandInput = DeregisterResourceRequest;
export declare type DeregisterResourceCommandOutput = DeregisterResourceResponse & __MetadataBearer;
export declare class DeregisterResourceCommand extends $Command<DeregisterResourceCommandInput, DeregisterResourceCommandOutput, LakeFormationClientResolvedConfig> {
    readonly input: DeregisterResourceCommandInput;
    constructor(input: DeregisterResourceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LakeFormationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeregisterResourceCommandInput, DeregisterResourceCommandOutput>;
    private serialize;
    private deserialize;
}
