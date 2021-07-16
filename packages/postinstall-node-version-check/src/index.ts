#!/usr/bin/env node

import { emitWarningIfUnsupportedVersion } from "./emitWarningIfUnsupportedVersion";
emitWarningIfUnsupportedVersion(process.version);
