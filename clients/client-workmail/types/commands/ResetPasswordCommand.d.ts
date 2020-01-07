import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";
import { ResetPasswordRequest, ResetPasswordResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ResetPasswordCommandInput = ResetPasswordRequest;
export declare type ResetPasswordCommandOutput = ResetPasswordResponse & __MetadataBearer;
export declare class ResetPasswordCommand extends $Command<ResetPasswordCommandInput, ResetPasswordCommandOutput, WorkMailClientResolvedConfig> {
    readonly input: ResetPasswordCommandInput;
    constructor(input: ResetPasswordCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkMailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ResetPasswordCommandInput, ResetPasswordCommandOutput>;
    private serialize;
    private deserialize;
}
