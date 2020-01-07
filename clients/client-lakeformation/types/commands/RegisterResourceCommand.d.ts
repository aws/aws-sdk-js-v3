import { LakeFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LakeFormationClient";
import { RegisterResourceRequest, RegisterResourceResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RegisterResourceCommandInput = RegisterResourceRequest;
export declare type RegisterResourceCommandOutput = RegisterResourceResponse & __MetadataBearer;
export declare class RegisterResourceCommand extends $Command<RegisterResourceCommandInput, RegisterResourceCommandOutput, LakeFormationClientResolvedConfig> {
    readonly input: RegisterResourceCommandInput;
    constructor(input: RegisterResourceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LakeFormationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RegisterResourceCommandInput, RegisterResourceCommandOutput>;
    private serialize;
    private deserialize;
}
